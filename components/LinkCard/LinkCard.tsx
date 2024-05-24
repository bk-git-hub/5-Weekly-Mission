import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './LinkCard.module.scss';
import getTimeDifference from '@/utils/time-functions/getTimeDifference';
import formatDate from '@/utils/time-functions/formatDate';
import { LinkObj } from '@/utils/interfaces';

const noImagePlaceholder = '/assets/images/no-image.png';
import starIcon from '@/public/assets/images/star.svg';
import purpleStarIcon from '@/public/assets/images/purplestar.svg';
import kebab from '@/public/assets/images/kebab.svg';

interface LinkCardProp {
  linkCardInfo: LinkObj;
  onAddToFolder: (url: string) => void;
  onLinkDelete: (url: string) => void;
}

export default function LinkCard({
  linkCardInfo,
  onAddToFolder,
  onLinkDelete,
}: LinkCardProp) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleLinkDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onLinkDelete(linkCardInfo.url);
  };

  const handleAddToFolder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onAddToFolder(linkCardInfo.url);
  };

  const DROPDOWN_LIST_ITEMS = [
    { text: '삭제하기', onClick: handleLinkDelete },
    { text: '폴더에추가', onClick: handleAddToFolder },
  ];

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const thumbnailURL = linkCardInfo.image_source
    ? linkCardInfo.image_source
    : noImagePlaceholder;
  const description = linkCardInfo.description;
  const url = linkCardInfo.url;
  const createdDate = new Date(linkCardInfo.created_at);
  const timestamp = getTimeDifference(createdDate);
  const altMessage = linkCardInfo.title;

  const handleKebabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsDropdownOpen(!isDropdownOpen);
    event.preventDefault();
  };

  const handleStarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    console.log(linkCardInfo);
  }, [linkCardInfo]);

  return (
    <a
      className={styles.linkCard}
      href={url}
      target='_blank'
      rel='noreferrer noopener'
    >
      <div className={styles.thumbnailContainer}>
        <button onClick={handleStarClick} className={styles.starButton}>
          {isFavorite ? (
            <Image
              src={purpleStarIcon}
              alt='favorite'
              className={styles.purpleStarIcon}
              fill
            />
          ) : (
            <Image
              src={starIcon}
              alt='favorite'
              className={styles.starIcon}
              fill
            />
          )}
        </button>
        <Image
          className={styles.thumbnail}
          src={thumbnailURL}
          alt={altMessage}
          fill
        />
      </div>
      <div className={styles.linkCardInfo}>
        <div className={styles.linkCardTimestampBar}>
          <span className={styles.timestamp}>{timestamp}</span>
          <div className='kebab-button-container' ref={dropdownRef}>
            <button onClick={handleKebabClick} className={styles.kebabButton}>
              <Image
                src={kebab}
                alt='kebab'
                className={styles.kebabButton}
                fill
              />
            </button>
            {isDropdownOpen && (
              <ul className={styles.dropdownList}>
                {DROPDOWN_LIST_ITEMS.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={item.onClick}
                      className={styles.dropdownItem}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <p className={styles.linkCardDescription}>{description}</p>
        <span className={styles.linkCardCreated}>
          {formatDate(createdDate)}
        </span>
      </div>
    </a>
  );
}
