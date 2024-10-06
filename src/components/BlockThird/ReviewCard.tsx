import { FC } from "react";

type props = {
  user: TUser
}
type TUser = {
  image: string,
  name: string,
  location: string,
  text: string
}

const ReviewCard: FC<props> = ({ user }) => {
  return (
    <div className="review">
      <div className="review__top">
        <img src={user.image} alt="Аватар пользователя" />
        <div>
          <h3 className="review__name">{user.name}</h3>
          <span className="review__location">{user.location}</span>
        </div>
      </div>
      <p  className="review__comment">
        {user.text}
      </p>
    </div>
  );
}

export default ReviewCard;