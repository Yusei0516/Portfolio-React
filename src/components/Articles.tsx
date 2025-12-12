import { articles } from "../data/articles";

export const Articles = () => {
    return (
        <div className="articles">
            <ul>
                {articles.map((a) => (
                    <li key={a.title} className="article-item">
                        <a href={a.url} target="_blank" rel="noreferrer">
                            {a.title}
                        </a>
                        <span className="article-date">{a.date}</span>
                    </li>
                ))}
            </ul>
            <div className="articles-more">
                <a 
                href="https://qiita.com/yusei0516"
                target="_blank"
                rel="noreferrer"
                >
                    View more on Qiita
                </a>
            </div>
        </div>
    );
};