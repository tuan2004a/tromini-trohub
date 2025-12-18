import BtnPrime from "@/components/common/button/btnPrime";
import Icon from "@/components/notfound/Icon";
import Title404 from "@/components/notfound/Title404";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="grow flex items-center justify-center p-4">
			<div className="max-w-3xl w-full flex flex-col items-center text-center gap-8 py-10">
				<div>
					<Icon />
				</div>
				<div>
					<Title404 />
				</div>
				<div className="flex gap-x-5">

					<Link to="/">
						<BtnPrime className="flex items-center text-white! bg-[#137fec]! gap-x-3">
							<FaArrowLeftLong className="text-lg" /> Quay về trang chủ
						</BtnPrime>
					</Link>
					<BtnPrime className="hover:bg-red-500!">Báo cáo sự cố</BtnPrime>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
