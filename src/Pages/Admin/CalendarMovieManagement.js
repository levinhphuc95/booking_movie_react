import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CalendarMovieManagement() {
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
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="sidebar-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to='/admin/UsersManagement' >
                                            Quản lý người dùng <span className="sr-only">(current)</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/admin/MovieManagement">
                                            Quản lý phim
              </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/admin/CalendarMovieManagement">
                                            Quản lý lịch chiếu
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
                                            <h5>THÊM LỊCH CHIẾU PHIM</h5>
                                        </div>
                                        <div className="card-body">
                                            <form className="needs-validation" id="foodForm">
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="maPhim">Mã phim</label>
                                                        <input type="text" className="form-control" id="maPhim" placeholder="" />


                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="ngayChieuGioChieu">Ngày chiếu giờ chiếu</label>
                                                        <input type="text" className="form-control" id="ngayChieuGioChieu" placeholder=" " required />

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="maRap">Mã rạp</label>
                                                        <input type="text" className="form-control" id="maRap" placeholder="" required />

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="giaVe">Giá vé</label>
                                                        <input type="text" className="form-control" id="giaVe" placeholder="" required />

                                                    </div>
                                                </div>
                                                <hr className="mb-4" />
                                                <button id="btnThemMon" className="btn btn-warning btn-lg btn-block" type="button">Thêm lịch chiếu</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Mã phim</th>
                                                    <th>Mã rạp</th>
                                                    <th>Giá vé</th>
                                                    <th>Ngày khởi chiếu</th>
                                                  
                                                    <th></th>
                                                    <th></th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Sieu nhân</td>
                                                    <td>Sieu nhân</td>
                                                    <td>Sieu nhân</td>
                                                    <td>Sieu nhân</td>
                                                    <td><button className="btn btn-primary">Cập nhật</button></td>
                                                    <td><button className="btn btn-danger">Xóa</button></td>
                                                </tr>

                                            </tbody>
                                        </table>

                                    </div>

                                </div>

                            </div>
                        </main>
                    </div>
                </div>

            </div>
        </div>
    )
}
