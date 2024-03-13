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
  const { href, children, title } = props;
  const router = useRouter();
  console.log(router.pathname === href);
  return (
    <Link href={href}>
      <a title={title} style={{
        pointerEvents: router.pathname !== href ? 'inherit' : 'none',
        color: router.pathname !== href ? "" : "#f08080"
      }} className='neu-App-link'>
        {children}
      </a>
    </Link>
  )
}

export default CustomLinkNeu