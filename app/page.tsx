import { BlogPosts } from 'app/components/posts'
import ArrowIcon from 'app/components/arrow-icon'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Bola Ahmed Buari
      </h1>
      <p className="mb-4">
        {`I'm a Senior Ruby Engineer with expertise in full-stack development, 
        scalable software solutions, and performance optimization. 
        With over ${
          new Date().getFullYear() - 2016
        } years of professional experience, I specialize in Ruby on Rails, 
        React, and cloud infrastructure to deliver high-quality, efficient 
        applications.`}
      </p>
      <section id="blogs" className="my-8">
        <h2 className="mb-4">Blogs</h2>
        <BlogPosts />
      </section>

      <section id="contact" className="my-8">
        <h2 className="mb-4">Contact</h2>
        <p>
          Let&apos;s connect! You can reach me via email or check out my GitHub
          and LinkedIn.
        </p>
        <ul className="mt-4">
          <li>
            <a
              href="mailto:me@bolabuari.com"
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300"
            >
              <ArrowIcon />
              <p className="ml-3 h-7">Email: me[at]bolabuari.com</p>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bolah2009"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300"
            >
              <ArrowIcon />
              <p className="ml-3 h-7">GitHub: @bolah2009</p>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/bolah2009"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300"
            >
              <ArrowIcon />
              <p className="ml-3 h-7">LinkedIn: @bolah2009</p>
            </a>
          </li>
        </ul>
      </section>

      <section id="resume" className="my-8">
        <h2 className="mb-4">Resume</h2>
        <p>You can download my full resume here:</p>
        <a
          href="https://docs.google.com/document/d/1ooRrz3u3pl1nD066JhrGAsXyTPsNakky5RcA5HsISpY/export?format=pdf"
          target="_blank"
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-300"
          rel="noopener noreferrer"
        >
          <ArrowIcon />
          <p className="ml-3 h-7">Download Resume</p>
        </a>
      </section>
    </section>
  )
}
