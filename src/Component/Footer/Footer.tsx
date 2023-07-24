import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer mt-5'>
      <div className='row text-start px-5 mx-3'>
        <div className='col-12 col-sm-3 col-md-3'>
          <h5 className='fw-semibold'>Hỗ trợ</h5>
          <p>Trung tâm trợ giúp</p>
          <p>Air cover</p>
          <p>Hỗ trợ người khuyết tật</p>
          <p>Các tùy chọn hủy</p>
          <p>Ứng phó covid-19</p>
          <p>Báo cáo lo ngại hàng xóm</p>
        </div>
        <div className='col-12 col-sm-3 col-md-3'>
           <h5 className='fw-semibold'>Cộng đồng</h5>
           <p>Airbnb.org: nhà ở cứu trợ</p>
           <p>Chống phân biệt đối xử</p>
        </div>
        <div className='col-12 col-sm-3 col-md-3'>
            <h5 className='fw-semibold'>Đón tiếp khach</h5>
            <p>Cho thuê nhà trên Airbnb</p>
            <p>AirCover cho Chủ nhà</p>
            <p>Xem tài nguyên đón tiếp khách</p>
            <p>Truy cập diễn đàn cộng đồng</p>
            <p>Đón tiếp khách có trách nhiệm</p>
        </div>
        <div className='col-12 col-sm-3 col-md-3'>
          <h5 className='fw-semibold'>AirBnB</h5>
          <p>Trang tin tức</p>
          <p>Tìm hiểu các tính năng mới</p>
          <p>Thư ngỏ từ các nhà sáng lập</p>
          <p>Cơ hội nghề nghiệp</p>
          <p>Nhà đầu tư</p>
        </div>
      </div>
      <hr />
      <div className='row px-5  mt-5'>
        <div className='col-12 col-sm-6 col-md-6'>
          <div className='d-flex '>
              <p className='mx-2 '><i className="fa fa-copyright mx-2"></i> 2023 AirBnB,INC All right reversed.</p>
              <NavLink to="#" className="mx-2 text-white text-decoration-none ">
                Quyền riêng tư
              </NavLink>
              <NavLink to="#" className="mx-2 text-white text-decoration-none ">
                Điều khoản
              </NavLink>
              <NavLink to="#" className="mx-2 text-white text-decoration-none">
                Sơ đồ trang web
              </NavLink>
          </div>
        
        </div>
        <div className='col-12 col-sm-6 col-md-6'>
        <div className='d-flex text-center justify-content-end'>
          <i className="fa fa-globe mt-1 mx-2"></i>
              <NavLink to="#" className="mx-2 text-white text-decoration-none">
                Tiếng Việt(VN)
              </NavLink>
              <NavLink to="#" className="mx-2 text-white text-decoration-none">
                $ USD
              </NavLink>
              <NavLink to="#" className="mx-2 text-white text-decoration-none">
                Hỗ trợ tài nguyên  <i className="fa fa-angle-up mx-1" style={{fontSize:"12px"}}></i>
              </NavLink>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer