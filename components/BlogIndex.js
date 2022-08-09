import { getPagesUnderRoute } from "nextra/context";
import styles from "./BlogIndex.module.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogIndex() {
  const dateOpts = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
  return (
    <div className={styles.articlesContainer}>
      {
        getPagesUnderRoute("/blog/articles")
        .sort((a,b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date))
        .map((page) => {
          const pageImg = require(`../public/blog/${page.frontMatter.image}`);
          
          return (
            <Link href={page.route}>
              <div className={styles.article}>
                <span style={{ position: "relative", height: "100%", width: "100%"}}>
                  <Image src={pageImg} layout="fill" objectFit="cover" objectPosition="0 0"/>
                </span>
                <div>
                  <h3> {page.frontMatter.title || page.meta?.title || page.name}</h3>
                  <p className="opacity-80">{page.frontMatter.description}</p>
                </div>
                <p style={{opacity: .5}} className="text-sm">
                  { new Date(page.frontMatter?.date).toLocaleDateString(page.locale, dateOpts) }
                </p>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}