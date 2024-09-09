import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        TJ Sari-Sari Store
      </h1>
      <p className="mb-4">
        {`Welcome to TJ Sari-Sari Store—your new neighborhood shop for all your daily essentials! We offer quality household items, snacks, and beverages 
        at affordable prices, making it easy and convenient for everyone to find what they need.`}
      </p>
      <p className="mb-4">
        {`Please note that our website is currently under construction as we work to provide you with a seamless online experience. Check back in 
        the following weeks for exciting updates and new features! Thank you for supporting TJ Sari-Sari Store; we look forward to serving our community!`}
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
