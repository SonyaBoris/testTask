import { mockArticle } from "../../data/mockData";
import "./articles.css"

const Articles = () => {
  return (
    <article className="articles">
      <div className="container articles__content">
        {
          mockArticle.map(article =>
            <div key={article.id} className="article">
              <h4 className="article__title">
                {article.title}
              </h4>
              <p className="article__text">{article.text}</p>
            </div>
          )
        }
      </div>
    </article>
  );
}

export default Articles;