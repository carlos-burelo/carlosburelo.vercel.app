import { Npm } from '#data/logos'
import { PackageInterface } from '#types'
import Link from 'next/link'
import _ from './Package.module.scss'

export default function PackageItem({
  name,
  url,
  version,
  description,
}: PackageInterface) {
  return (
    <li className={_.item}>
      <Link href={url}>
        <a className={_.card}>
          <div className={_.head}>
            <div className={_.icon}>
              <Npm />
            </div>
            <div className={_.meta}>
              <h1 className={_.name}>{name}</h1>
              <span className={_.version}>{version}</span>
            </div>
          </div>
          <p className={_.description}>
            {description ||
              'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Ex, fugiat.'}
          </p>
        </a>
      </Link>
    </li>
  )
}
