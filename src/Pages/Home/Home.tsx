import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../Redux/configStore'
import { PageModel, getApiLocationSearch } from '../../Redux/reducers/locationSearch'

type Props = {}

const Home = (props: Props) => {
  const { arrLocationSearch }=useSelector((state:RootState)=>state.locationSearch)
  const dispatch: DispatchType = useDispatch()
  const getLocationSearchList=()=>{
    const action=getApiLocationSearch()
    dispatch(action)
  }
  useEffect(()=>{
    getLocationSearchList()
  },[])
  console.log(arrLocationSearch)
  return (
    <div className='container-fluid mt-5'>
      <h1 className='px-5 mx-4'>Khám phá những điểm đến gần đây</h1>
      <div className='row g-5 mt-2 px-5 mx-2 '>
      {arrLocationSearch?.map((item:PageModel)=>{
          return(
            <div className='col-6 col-sm-3 col-md-3' key={item.id} >
                <div className='d-flex text-center'>
                  <div className='img-location w-25  '>
                    <img src={item.hinhAnh} alt="" style={{maxWidth:"100%",maxHeight:"90px"}} className='rounded'/>
                  </div>
                  <div className='location text-center w-50  d-flex align-items-center mx-2'>
                    <p className='fs-6'>{item.tinhThanh}</p>
                  </div>
                </div>
            </div>
          );
      })}
     
      </div>
      <h1 className='px-5 mx-4 mt-5'>Ở bất cứ đâu</h1>
      <div className='row g-5 px-5 mx-2 mt-2'>
        <div className='col-6 col-sm-3 col-md-3'>
          <div className=''>
            <img src="./assets/image/home.jpg" alt="" style={{maxWidth:"100%",maxHeight:"250px"}} />
            <p className='fs-6 fw-semibold mt-2'>Toàn bộ nhà</p>
          </div>    
        </div>
        <div className='col-6 col-sm-3 col-md-3'>
          
        <div className=''>
            <img src="./assets/image/amazingstate.jpg" alt="" style={{maxWidth:"100%",maxHeight:"250px"}} />
            <p className='fs-6 fw-semibold mt-2'>Chổ ở độc đáo</p>
          </div>   
        </div>
        <div className='col-6 col-sm-3 col-md-3'>
        <div className=''>
            <img src="./assets/image/farm.jpg" alt="" style={{maxWidth:"100%",maxHeight:"250px"}} />
            <p className='fs-6 fw-semibold mt-2'>Trang trại và thiên nhiên</p>
          </div>   
        </div>
        <div className='col-6 col-sm-3 col-md-3'>
        <div className=''>
            <img src="./assets/image/dog.jpg" alt="" style={{maxWidth:"100%",maxHeight:"250px"}} />
            <p className='fs-6 fw-semibold mt-2'>Cho phép mang theo thú cưng</p>
          </div>   
        </div>
      </div>
    
     
    </div>
  )
}

export default Home