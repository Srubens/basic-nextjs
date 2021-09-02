import React, { ReactElement, cloneElement } from 'react'
import Link, {LinkProps} from 'next/Link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps{
    children: ReactElement
    activeClassName:string
}

const ActiveLink = ({children, activeClassName, ...otherProps}:ActiveLinkProps) =>{
    const {asPath} = useRouter()
    const className = asPath === otherProps.href ? activeClassName : ''
    return(
        <Link {...otherProps} >{cloneElement(children, {className})}</Link>
    )
}

export default ActiveLink