import { lazy } from "react";

const Dashboards = lazy(() => import("./Dashboard"));

// Room
const Rooms = lazy(() => import("./Room"));
const RoomDetail = lazy(() => import("./RoomDetail"));
const RoomCreate = lazy(() => import("./RoomCreate"));

// Service
const Service = lazy(() => import("./CustomerService"));
const CustomerServiceCreate = lazy(() => import("./CustomerServiceCreate"));
const CustomerServiceDetail = lazy(() => import("./CustomerServiceDetail"));

// User
const User = lazy(() => import("./User"));

// Bill
const Bill = lazy(() => import("./Bill"));
const CreateBill = lazy(() => import("./BillCreate"));
const DetailBill = lazy(() => import("./BillDetail"));

const NotFoundPage = lazy(() => import("./NotFoundPage"));

export {
	Dashboards,

	// Room
	Rooms,
	RoomDetail,
	RoomCreate,

	// Service
	Service,
	CustomerServiceCreate,
	CustomerServiceDetail,

	// User
	User,

	// Bill
	Bill,
	CreateBill,
	DetailBill,
	NotFoundPage,
};
