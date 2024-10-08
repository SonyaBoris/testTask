import { FC } from "react";
import USER from "/user.png"
import "./reviewCard.css"
import { TUser } from "../../types/mocks";

type props = {
  user: TUser,
}

const ReviewCard: FC<props> = ({ user }) => {
  return (
    <div className="review">
      <div className="review__top">
        <img src={USER} alt="Аватар пользователя" />
        <div>
          <h3 className="review__name">{user.name}</h3>
          <span className="review__location">{user.location}</span>
        </div>
      </div>
      <p className="review__comment">
        {user.comment}
      </p>
    </div>
  );
}

export default ReviewCard;