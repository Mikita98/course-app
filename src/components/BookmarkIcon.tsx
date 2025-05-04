// src/components/icons/BookmarkIcon.tsx
import {FC} from 'react';

interface BookmarkIconProps {
  filled?: boolean;
  className?: string;
}

export const BookmarkIcon: FC<BookmarkIconProps> = ({filled = false, className = ''}) => {
  if (filled) {
    return (
      <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 5.25V25.8609C6 26.4891 6.51094 27 7.13906 27C7.37344 27 7.60312 26.9297 7.79531 26.7938L15 21.75L22.2047 26.7938C22.3969 26.9297 22.6266 27 22.8609 27C23.4891 27 24 26.4891 24 25.8609V5.25C24 4.00781 22.9922 3 21.75 3H8.25C7.00781 3 6 4.00781 6 5.25Z" fill="#0073DD"/>
      </svg>
    );
  }

  return (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 5.25C6.5 4.00781 7.50781 3 8.75 3V5.25V23.6906L14.8484 19.3359C15.2375 19.0547 15.7672 19.0547 16.1562 19.3359L22.25 23.6906V5.25H8.75V3H22.25C23.4922 3 24.5 4.00781 24.5 5.25V25.875C24.5 26.2969 24.2656 26.6812 23.8906 26.8734C23.5156 27.0656 23.0656 27.0328 22.7234 26.7891L15.5 21.6328L8.27656 26.7891C7.93438 27.0328 7.48438 27.0656 7.10938 26.8734C6.73438 26.6812 6.5 26.2969 6.5 25.875V5.25Z" fill="#0073DD"/>
    </svg>
  );
};