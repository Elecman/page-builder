import {css} from '@emotion/react';

export const baseStyles = css({
  '& .ant-tabs-content-holder': {
    borderColor: '#f0f0f0'
  },
  '&.ant-tabs-left': {
    height: '100%',
    '& .ant-tabs-content': {
      '&.ant-tabs-content-left': {
        '& .ant-tabs-tabpane': {
          paddingLeft: 0
        },
      }
    },

    '& .ant-tabs-nav-list': {
      alignItems: 'center',
      padding: '8px 4px',

      '& .ant-tabs-tab': {
        justifyContent: 'center',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: 4,

        '& + .ant-tabs-tab': {
          marginTop: 4
        },

        '&:hover': {
          color: '#096dd9',
          background: 'rgba(245, 245, 245, 1)'
        },

        '&.ant-tabs-tab-active': {
          background: '#1677FF',
          '& .ant-tabs-tab-btn': {
            color: '#fff'
          }
        },
        '& .ant-tabs-tab-btn': {
          display: 'flex',
          alignItems: 'center',
        }
      },
    }
  }
});
