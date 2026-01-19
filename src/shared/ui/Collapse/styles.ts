import {css} from '@emotion/react';

export const baseStyle = css({
  '&.ant-collapse': {
    borderRadius: 0,
    border: 'unset'
  },
  '&.ant-collapse-small': {
    '& .ant-collapse-item': {
      '& .ant-collapse-content-box': {
        padding: 4
      },
    }
  },
  '& .ant-collapse-item': {
    '& .ant-collapse-content': {
      borderTopColor: 'transparent',
      '&.ant-collapse-content-active': {
        borderTopColor: 'transparent'
      }
    },
    '&.ant-collapse-item-active': {
      '& .ant-collapse-header': {
        color: '#096dd9',
        background: '#fff'
      }
    },
    '& .ant-collapse-header': {
      background: '#fff',

      '&:hover': {
        color: '#096dd9',
        background: 'rgba(245, 245, 245, 0.25)'
      }
    },

    borderRadius: 0,
    borderBottom: '1px solid #f0f0f0',
    '&:last-child': {
      borderRadius: 0,
      borderBottom: '1px solid #f0f0f0'
    }
  }
});
