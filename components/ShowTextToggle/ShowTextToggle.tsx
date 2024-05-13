import Image from 'next/image';

interface ShowTextToggleProps {
  showText: boolean;
  onClick: () => void;
}

export default function ShowTextToggle({
  showText,
  onClick,
}: ShowTextToggleProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      style={{ width: '16px', height: '16px', position: 'relative' }} // 객체 형태로 스타일 지정
    >
      {showText ? (
        <Image src={'/assets/images/eye-on.svg'} alt='Hide password' fill />
      ) : (
        <Image src={'/assets/images/eye-off.svg'} alt='Show password' fill />
      )}
    </button>
  );
}
