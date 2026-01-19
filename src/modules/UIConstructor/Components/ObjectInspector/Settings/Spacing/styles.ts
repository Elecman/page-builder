import {css} from '@emotion/react';

export const marginContainerStyle = css({
  display: 'flex',
  position: 'relative',
  background: '#fff',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px dashed rgba(64, 150, 255, 0.5)',
  borderRadius: 12,
});

export const paddingContainerStyle = css({
  display: 'flex',
  position: 'relative',
  width: '100%',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'rgba(230, 244, 255, 0.5)',
  border: '1px solid rgba(64, 150, 255, 0.5)',
  borderRadius: 6,
})

export const marginText = css({
  position: 'absolute',
  right: 5,
  bottom: 0,
  '& > span': {
    textTransform: 'uppercase',
    color: '#91caff',
    fontSize: 11,
    fontWeight: 500,
  }
});
export const paddingText = css({
  position: 'absolute',
  right: 5,
  bottom: 0,
  '& > span': {
    textTransform: 'uppercase',
    color: '#91caff',
    fontSize: 11,
    fontWeight: 500,
  }
})

export const topInputBorder = css({
  width: '30%',
  padding: '2px 0',
  '&:before': {
    content: '" "',
    position: 'absolute',
    left: '50%',
    top: -1.5,
    transform: 'translateX(-50%)',
    height: 2,
    width: '45%',
    background: 'rgba(64, 150, 255, 0.8)'
  }
});

export const leftInputBorder = css({
  width: '100%',
  padding: '0 2px',
  '&:before': {
    content: '" "',
    position: 'absolute',
    left: -1.5,
    top: '50%',
    transform: 'translateY(-50%)',
    width: 2,
    height: '30%',
    background: 'rgba(64, 150, 255, 0.8)'
  }
});

export const rightInputBorder = css({
  width: '100%',
  padding: '0 2px',
  '&:before': {
    content: '" "',
    position: 'absolute',
    right: -1.5,
    top: '50%',
    transform: 'translateY(-50%)',
    width: 2,
    height: '30%',
    background: 'rgba(64, 150, 255, 0.8)'
  }
})

export const bottomInputBorder = css({
  width: '30%',
  padding: '2px 0',
  '&:before': {
    content: '" "',
    position: 'absolute',
    left: '50%',
    bottom: -1.5,
    transform: 'translateX(-50%)',
    height: 2,
    width: '45%',
    background: 'rgba(64, 150, 255, 0.8)'
  }
})
