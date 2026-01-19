## Структура проекта

```
src/
├── app/                     # Основная конфигурация приложения
│   ├── stores/              # Глобальные хранилища (MobX)
│   │   └── RootStore.ts     # Корневой стор
│   ├── providers/           # Провайдеры (контексты)
│   │   └── AppProvider.tsx  # Главный провайдер приложения
│   ├── services/            # Сервисы (API, утилиты)
│   │   └── ApiService.ts    # Пример сервиса для работы с API
│   ├── config/              # Конфигурации приложения
│   │   ├── Api.ts           # Настройки API
│   │   └── Theme.ts         # Настройки темы (например, для Ant Design)
│   └── routes/              # Маршруты (если используется React Router)
│       ├── AppRouter.tsx    # Основной роутер
│       ├── Routes.ts        # Конфигурация маршрутов
│       └── ...              # Дополнительные роутеры
│
├── modules/                 # Модули приложения (каждая фича в отдельной папке)
│   ├── auth/                # Модуль авторизации
│   │   ├── components/      # UI-компоненты
│   │   │   └── LoginForm.tsx
│   │   ├── models/          # Модели (MobX store)
│   │   │   └── AuthStore.ts
│   │   ├── viewModels/      # ViewModel (логика для компонентов)
│   │   │   └── AuthViewModel.ts
│   │   ├── types/           # Типы данных, специфичные для модуля
│   │   │   └── User.ts      # Интерфейсы и типы
│   │   ├── views/           # Представления (или страницы)
│   │   │   └── LoginPage.tsx
│   │   └── index.ts         # Публичный API модуля
│   │
│   ├── profile/             # Модуль профиля
│   │   ├── components/      # UI-компоненты
│   │   ├── models/          # Модели (MobX store)
│   │   ├── viewModels/      # ViewModel
│   │   ├── views/           # Представления (или страницы)
│   │   └── index.ts         # Публичный API модуля
│   │
│   └── ...                  # Другие модули
│
├── shared/                  # Общие ресурсы
│   ├── ui/                  # Общие UI-компоненты
│   ├── styles/              # Глобальные стили (Styled Components)
│   ├── hooks/               # Общие хуки
│   ├── utils/               # Утилиты
│   └── types/               # Общие типы (TypeScript)
│
├── App.tsx                  # Основной компонент приложения
└── main.tsx                 # Точка входа
```

### Пример иерархии зависимостей
```
app/ → pages/ → modules/ → shared/
```

- pages зависит от modules и shared.
- modules зависит только от shared.
- shared не зависит ни от кого.

## Описание структуры
### 1. app/
 - __`stores/`: Глобальные хранилища MobX (например, RootStore).__
```typescript
// src/app/stores/RootStore.ts
import { makeAutoObservable } from 'mobx';
import AuthStore from '../../modules/auth/models/AuthStore';

class RootStore {
  authStore: AuthStore;

  constructor() {
    makeAutoObservable(this);
    this.authStore = new AuthStore(this);
  }
}

export default RootStore;
```
 - __`providers/`: Провайдеры (контексты) для предоставления глобальных данных.__
```typescript jsx
// src/app/providers/AppProvider.tsx
import React, { createContext, useContext } from 'react';
import RootStore from '../stores/RootStore';

const StoreContext = createContext<RootStore | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const rootStore = new RootStore();
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within an AppProvider');
  }
  return store;
};
```
 - __`services/`: Сервисы для работы с API или другими внешними ресурсами.__
```typescript
// src/app/services/apiService.ts
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Базовый URL для GraphQL API
const BASE_URL = process.env.REACT_APP_GRAPHQL_API_URL || 'https://api.example.com/graphql';

// Создаем HTTP-ссылку для Apollo Client
const httpLink = new HttpLink({
  uri: BASE_URL,
});

// Обработка ошибок (опционально)
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// Линк для добавления заголовков (например, токена авторизации)
const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('authToken');
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
  return forward(operation);
});

// Создаем клиент Apollo
const apolloClient = new ApolloClient({
  link: from([authLink, errorLink, httpLink]), // Порядок линков важен
  cache: new InMemoryCache(),
});

export default apolloClient;
```

 - __`config/`: Конфигурации приложения__

```typescript
// src/app/config/api.ts
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
};
```

```typescript
// src/app/config/theme.ts
import { ThemeConfig } from 'antd';

export const APP_THEME: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 4,
  },
};
```

 - __`routes/`: Маршруты (если используется React Router)__
```typescript jsx
// src/app/routes/AppRouter.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import Layout from '../../modules/shared/components/Layout';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            {ROUTES.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default AppRouter;
```

```typescript jsx
// src/app/routes/routes.ts
import {lazy} from 'react';

const HomePage = lazy(() => import('../../modules/home/pages/HomePage'));
const LoginPage = lazy(() => import('../../modules/auth/pages/LoginPage'));
const UserProfilePage = lazy(() => import('../../modules/user/pages/UserProfilePage'));

export const ROUTES = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/user/:userId',
    element: <UserProfilePage />,
  },
];
```

### 2. modules/
#### Каждый модуль представляет собой отдельную фичу приложения (например, авторизация, профиль и т.д.). Внутри модуля:

 - __`components/`: UI-компоненты, специфичные для модуля.__

```typescript jsx
// src/modules/user/components/UserCard.tsx
import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { User } from '../types/User'; // Типы данных пользователя

interface UserCardProps {
  user: User;
  onEdit: () => void; // Колбэк для редактирования пользователя
  onDelete: () => void; // Колбэк для удаления пользователя
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  return (
    <Card
      style={{ width: 300, margin: '16px' }}
      actions={[
        <Button type="link" onClick={onEdit}>
          Редактировать
        </Button>,
        <Button type="link" danger onClick={onDelete}>
          Удалить
        </Button>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar src={user.avatarUrl} />}
        title={user.name}
        description={user.email}
      />
      <p style={{ marginTop: '16px' }}>{user.bio}</p>
    </Card>
  );
};

export default UserCard;
```

 - __`models/`: Модель (MobX store) для управления состоянием модуля. Содержит данные и методы для их обновления.__

```typescript
// src/modules/user/models/UserStore.ts
import { makeAutoObservable } from 'mobx';
import { User } from '../types/User';

class UserStore {
  user: User | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchUser = async (userId: string) => {
    this.isLoading = true;
    // Пример запроса к API
    const response = await fetch(`/api/users/${userId}`);
    this.user = await response.json();
    this.isLoading = false;
  };

  updateUser = async (userData: Partial<User>) => {
    if (!this.user) return;
    this.isLoading = true;
    // Пример обновления данных
    const response = await fetch(`/api/users/${this.user.id}`, {
      method: 'PATCH',
      body: JSON.stringify(userData),
    });
    this.user = await response.json();
    this.isLoading = false;
  };
}

export default UserStore;
```
 - __`types:/` Типы данных, специфичные для модуля__
```typescript
// src/modules/user/types/User.ts
export interface User {
  id: string;
  name: string;
  email: string;
  bio?: string; // Опциональное поле
  avatarUrl?: string; // Опциональное поле
}
```

 - __`viewModels/`: Логика для взаимодействия между View и Model.__

```typescript
// src/modules/user/viewModels/UserViewModel.ts
import UserStore from '../models/UserStore';

class UserViewModel {
  constructor(private userStore: UserStore) {}

  get user() {
    return this.userStore.user;
  }

  get isLoading() {
    return this.userStore.isLoading;
  }

  fetchUser = (userId: string) => {
    this.userStore.fetchUser(userId);
  };

  updateUser = (userData: Partial<User>) => {
    this.userStore.updateUser(userData);
  };
}

export default UserViewModel;
```

 - __`views/`: Страницы или представления.__

```typescript jsx
// src/modules/user/views/UserProfile.tsx
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import UserViewModel from '../viewModels/UserViewModel';
import UserStore from '../models/UserStore';
import UserCard from '../components/UserCard';

const UserProfile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const userStore = new UserStore();
  const userViewModel = new UserViewModel(userStore);

  useEffect(() => {
    if (userId) {
      userViewModel.fetchUser(userId);
    }
  }, [userId, userViewModel]);

  const handleEdit = () => {
    console.log('Редактирование пользователя:', userViewModel.user);
  };

  const handleDelete = () => {
    console.log('Удаление пользователя:', userViewModel.user);
  };

  if (userViewModel.isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!userViewModel.user) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <UserCard
        user={userViewModel.user}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default observer(UserProfile);
```
 - __`index.ts`: Публичный API модуля (экспорт компонентов, страниц и т.д.).__
```typescript
// src/modules/user/index.ts
export { default as UserProfile } from './views/UserProfile';
export type { User } from './types/User';
```

### 3. shared/
 - __`components/`: Переиспользуемые UI-компоненты.__
 - __`styles/`: Глобальные стили (Styled Components).__
 - __`hooks/`: Общие хуки.__
 - __`utils/`: Вспомогательные функции.__
```typescript
// src/shared/utils/arrayHelpers/arrayFromLength.ts
export const arrayFromLength = (length: number) => {
  return Array.from({length})
}
```
 - __types/: Общие типы TypeScript.__

# Преимущества структуры:
    1. Модульность
    2. Переиспользуемость
    3. Тестируемость
    4. Упрощает разработку и поддержку фич.
    5. Минимизирует зависимости между фичами.
    6. Изоляция модулей.
# Минусы:
    1. Может привести к дублированию кода.
    2. Требует четкого разделения на фичи.

### Разделение ответственности:
 * Model (UserStore): Управление состоянием и бизнес-логикой.
 * ViewModel (UserViewModel): Логика для взаимодействия между View и Model.
 * View (UserProfile): Отображение данных и обработка пользовательских действий.

### Масштабируемость:
 * Каждый компонент изолирован, что упрощает добавление новых фич.

### Тестируемость:
 * ViewModel и Model легко тестировать отдельно от UI.

### Гибкость:
 * MobX обеспечивает реактивное управление состоянием.
