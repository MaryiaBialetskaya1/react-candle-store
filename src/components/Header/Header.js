import s from "./Header.module.css";
import account from "../Header/images/account.png";

export const Header = () => {
  return (
    <div className={s.container}>
      <div>
        <h1>Candlearia Store</h1>
      </div>
      <div>
        <input type="text" id="lname" name="lname" placeholder="Serch" />
      </div>
      <div>
        <img src={account} alt="account icon" />
        <p>account</p>
      </div>
      <div>
        <p>bag</p>
      </div>
    </div>
  );
};
