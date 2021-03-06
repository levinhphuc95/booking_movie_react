import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAllMovieAction, getDetailMovieAction } from '../../../redux/Action/MovieAction'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { getCinemaAction, getCinemaBrandAction } from '../../../redux/Action/CinemaAction'
import { formatDate } from '../../../util/GetDateFormatted'
import { getCalendarMovieAction } from '../../../redux/Action/CalendarAction'

export default function CalendarMovieManagement() {
    const { allMovie} = useSelector(state => state.MovieReducer)
    const { allCinema, allCinemaBrand } = useSelector(state => state.CinemaReducer)
   
    const [maPhim, setMaPhim] = useState('')
    const [ngayChieu, setNgayChieu] = useState('')
    const [gioChieu, setGioChieu] = useState('')
    const [giaVe, setGiaVe] = useState('')
    const [tenRap, setTenRap] = useState('')
    const [arrMaRap, setArrMaRap] = useState('')
    const [maRap, setMaRap] = useState('')



   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllMovieAction())
        dispatch(getCinemaBrandAction())
        dispatch(getDetailMovieAction(maPhim))
        dispatch(getCinemaAction(tenRap))
    }, [dispatch, maPhim, tenRap])

    console.log(allCinemaBrand)
    return (
        <div>
            <div>
                <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow navbarAdmin ">
                    <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/admin">Admin</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar ">
                            <div className="sidebar-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to='/admin/UsersManagement' >
                                            Qu???n l?? ng?????i d??ng
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/admin/MovieManagement">
                                            Qu???n l?? phim
              </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/admin/CalendarMovieManagement">
                                            Qu???n l?? l???ch chi???u
              </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <nav className="my-3" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/admin">Admin</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Calendar Movie Management</li>
                                </ol>
                            </nav>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>TH??M L???CH CHI???U PHIM</h5>
                                        </div>
                                        <div className="card-body">
                                            <form >
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="maPhim">T??n phim</label>
                                                        <Autocomplete
                                                            id="combo-box-demo"
                                                            options={allMovie}
                                                            name="maPhim"
                                                            getOptionLabel={(option) => option?.tenPhim}
                                                            onChange={(e, value) => {
                                                                setMaPhim(value?.maPhim)
                                                       
                                                            }}
                                                            disableClearable={true}

                                                            renderInput={(params) => <TextField {...params} label="T??n phim" variant="outlined" />}
                                                        />


                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="ngayChieuGioChieu">Ng??y chi???u </label>
                                                        <input type="date" className="form-control" id="ngayChieuGioChieuValue" placeholder="" onChange={(e) => {
                                                            setNgayChieu(e.target?.value)
                                                        }} />
                                                    </div>

                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="maRap">T??n r???p</label>
                                                        <Autocomplete
                                                            
                                                          
                                                            id="combo-box-demo"
                                                            options={allCinemaBrand}
                                                            getOptionLabel={(option) => option?.maHeThongRap}
                                                            onChange={(e, value) => {
                                                                setTenRap(value?.maHeThongRap)
                                                    
                                                            }}
                                                            disableClearable={true}
                                                            renderInput={(params) => <TextField {...params} label="T??n r???p" variant="outlined" />}
                                                        />

                                                    </div>

                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="ngayChieuGioChieu">Gi??? chi???u</label>
                                                        <input type="time" step="1" className="form-control" id="ngayChieuGioChieuValue" placeholder="" onChange={(e) => {
                                                            setGioChieu(e.target?.value)
                                                        }} />
                                                    </div>

                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="maRap">?????a ch??? r???p</label>
                                                        <Autocomplete
                                                            disabled={maPhim === '' || tenRap === ''}
                                                            id="combo-box-demo"
                                                            options={allCinema}
                                                       
                                                            getOptionLabel={(option) => option?.diaChi}
                                                            onChange={(e, value) => {
                                                                setArrMaRap(value?.danhSachRap)
                                                            }}
                                                            disableClearable={true}

                                                            renderInput={(params) => <TextField {...params} label="?????a ch??? r???p" variant="outlined" />}
                                                        />

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="giaVe">Gi?? v??</label>
                                                        <input type="text" className="form-control" id="giaVe" placeholder="" required onChange={(e) => {
                                                            setGiaVe(e.target?.value)
                                                        }} />

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="maRap">M?? r???p</label>
                                                        <Autocomplete
                                                            disabled={maPhim === '' || tenRap === '' || arrMaRap === ''}

                                                            id="combo-box-demo"
                                                            options={arrMaRap}
                                                            getOptionLabel={(option) => option?.maRap.toString()}
                                                            onChange={(e, value) => {
                                                                setMaRap(value?.maRap)

                                                            }}
                                                            disableClearable={true}

                                                            renderInput={(params) => <TextField {...params} label="M?? r???p" variant="outlined" />}
                                                        />

                                                    </div>
                                                </div>



                                                <hr className="mb-4" />
                                                <button id="btnThemMon" className="btn btn-warning btn-lg btn-block" type="submit" onClick={() => {
                                                    dispatch(getCalendarMovieAction({
                                                        maPhim,
                                                        ngayChieuGioChieu: formatDate(ngayChieu) + " " + gioChieu,
                                                        maRap,
                                                        giaVe
                                                    }))
                                                }}>Th??m l???ch chi???u</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </main>
                    </div>
                </div>

            </div>
        </div >
    )
}
