const shareIcon = '/assets/images/share_icon.svg';
const penIcon = '/assets/images/pen_icon.svg';
const deleteIcon = '/assets/images/delete_icon.svg';

interface UtilButtonProp {
  imgSrc: string;
  btnText: string;
  alt: string;
  id: number;
  onClick: () => void;
}

const noop = () => {};

export const UTIL_BUTTONS_PROPS: { [key: string]: UtilButtonProp } = {
  share: {
    imgSrc: shareIcon,
    btnText: '공유',
    alt: '공유 아이콘',
    id: 1,
    onClick: noop,
  },
  changeName: {
    imgSrc: penIcon,
    btnText: '이름 변경',
    alt: '이름 변경 아이콘',
    id: 2,
    onClick: noop,
  },
  delete: {
    imgSrc: deleteIcon,
    btnText: '삭제',
    alt: '삭제 아이콘',
    id: 3,
    onClick: noop,
  },
};
