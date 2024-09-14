import Link from 'next/link'
import { PRODUCT_ROUTE } from '../constants/NavItems.constant'
import { Button, } from '@chakra-ui/react'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        TJ Sari-Sari Store
      </h1>
      <p className="mb-4">
        {`Welcome to TJ Sari-Sari Store—your go-to spot for everyday essentials. We offer quality household items, snacks, and beverages at affordable prices for your convenience.`}
      </p>
      <p className="mb-4">
        {`Our website is under construction as we work to bring you a smooth online shopping experience. Stay tuned for updates! Thank you for supporting TJ Sari-Sari Store—we’re excited to serve you.`}
      </p>

      <Button colorScheme='red'>
        <Link
          href={PRODUCT_ROUTE}
          className="transition-all hover:text-neutral-800 flex align-middle relative py-1 px-2 m-1"
        >
          View Products
        </Link>
      </Button>

    </section>
  )
}
