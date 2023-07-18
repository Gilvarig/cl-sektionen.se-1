import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html";
import { convertDate } from "../utils/convertDate";

import { analytics } from "../firebase/clientApp";
import { logEvent } from "firebase/analytics";

import bg from "../public/media/img/Post_Placeholder.webp";

import styles from "../styles/feed-preview.module.css";

export default function FeedPreview({ posts }) {
  return (
    <div className={styles.preview}>
      {posts.map((post) => {
        const date = new Date(post.publishDate["seconds"] * 1000);
        return (
          <div className={styles.postWrapper} key={post.id}>
            <Link
              href={`/aktuellt/${post.id}`}
              onClick={() => {
                logEvent(analytics, "post_click", { page: window.location.pathname });
              }}>
              <div className={styles.postPreview}>
                <div className={styles.image}>
                  {post.image && (
                    <Image src={post.image} width={240} height={200} alt="Post image" />
                  )}
                  {!post.image && <Image src={bg} placeholder="blur" alt="Bakgrundsbild KTH" />}
                </div>
                <div className={styles.postMeta}>
                  <h2>{post.title}</h2>
                  {post.author} {convertDate(date)}
                </div>
                <div className={styles.postContent}>
                  <p className={styles.subtitle}>{post.subtitle}</p>
                  {/* Parse för att formatera om html koden till html element
                                        Sanitize för att göra det lite mer stilrent i previewn dvs inga styles*/}
                  <div className={styles.body}>
                    <p>
                      {parse(
                        sanitizeHtml(post.body, {
                          allowedTags: ["strong"],
                        })
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
