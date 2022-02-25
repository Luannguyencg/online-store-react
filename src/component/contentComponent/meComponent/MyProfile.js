import React from 'react';
import noAvata from '../../../img/no_avata.png'
function MyProfile() {
  return (
    <div className="col l-10 m-10 c-12">
      <div className="profile">
      <div className="profile__header">
          <h1 className="profile__header-heading">Hồ sơ của tôi</h1>
          <span className="profile__header-sub">Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
      </div>
      <div className="profile__content row">
        <div className="profile__content-info col l-7 m-7 c-12"> 
          <div className="profile__item">
            <label className="profile__item-type">Tên đăng nhập</label>
            <div className="profile__item-text">luannguyen</div>
          </div>
          <div className="profile__item">
            <label className="profile__item-type">Email</label>
            <div className="profile__item-text">luannguyen12069@gmail.com</div>
          </div>
          <div className="profile__item">
            <label className="profile__item-type">Số điện thoại</label>
            <div className="profile__item-text">0702568211</div>
          </div>
          <div className="profile__item">
            <label className="profile__item-type">Ngày sinh</label>
            <input type="text" placeholder="Ngày / Tháng / Năm" className="profile__item-text"/>
          </div>
          <div className="profile__item">
            <label className="profile__item-type">Giới tính</label>
            <div className="profile__item-box">
              <div className="profile__item-gender">
                <span className="profile__item-text" >Nam</span>
                <input type="radio" className="profile__item-input" name="gender" value="male" />
              </div>
              <div className="profile__item-gender">
                <span className="profile__item-text">Nữ</span>
                <input type="radio" className="profile__item-input" name="gender" value="female" />
              </div>
              <div className="profile__item-gender">
                <span className="profile__item-text">Khác</span>
                <input type="radio" className="profile__item-input" name="gender" value="other" />
              </div>
            </div>
          </div>
          <button className="btn btn--primary profile__btn">Lưu</button>
        </div>   
        <div className="profile__avata col l-5 m-5 c-12">
          <div className="profile__avata-img" style={{backgroundImage: `url(${noAvata})` }}></div>
          <label htmlFor="profile-avata" className="profile__label-btn btn btn--primary">
            <input
              id="profile-avata" 
              name="avata-input" 
              type="file" 
              className="input-avata" 
            />
            Chọn ảnh
          </label>
        </div>
      </div>

      </div>
    </div>  
  )
}

export default MyProfile;
