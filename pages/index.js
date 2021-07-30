import ArticleList from "../components/ArticleList"


export default function Home({articles}) {
  // console.log(articles)
  return (
    <div>
      {/* pass articles into ArticleList component as props */}
      <ArticleList articles={articles} />
    </div>
  )
}

// calls an api and gets 6 articles.
export const getStaticProps = async () => {
  // fake rest api
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}