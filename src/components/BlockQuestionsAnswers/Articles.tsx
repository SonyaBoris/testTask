const mockArticle = [
  {
    id: 1,
    title: "Опрошенных пользовались микрокредитами",
    text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах"
  },
  {
    id: 2,
    title: "Опрошенных пользовались микрокредитами",
    text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах"
  },
  {
    id: 3,
    title: "Опрошенных пользовались микрокредитами",
    text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах"
  },
  {
    id: 4,
    title: "Опрошенных пользовались микрокредитами",
    text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах"
  }
]

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