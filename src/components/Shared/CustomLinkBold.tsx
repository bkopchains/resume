import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router'


interface ICustomLink extends LinkProps {
  href: string;
  style?: React.CSSProperties
  title?: string;
  children?: React.ReactNode;
}

const CustomLinkNeu: FC<ICustomLink> = (props) => {
  const { href, children } = props;
  const router = useRouter();
  return (
    <Link href={href} legacyBehavior>
      <a style={{
        pointerEvents: router.pathname !== href ? 'inherit' : 'none',
        color: router.pathname !== href ? "" : "#E24E1B"
      }} className='bold-App-link'>
        {children}
      </a>
    </Link>
  )
}

export default CustomLinkNeu