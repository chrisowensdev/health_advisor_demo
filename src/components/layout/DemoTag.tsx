import Image from "next/image";
import Link from "next/link";

const DemoTag = () => {
	return (
		<div className=" border-slate-300 pt-6 flex flex-col items-center justify-center text-xs text-slate-500">
			<div>
				<p>Professional demo website for health advisor services.</p>
			</div>
			<div className="text-center mt-3">
				<p>Designed By</p>
				<Link
					href="https://elevatedevworks.com"
					className="flex items-center mt-2"
				>
					<Image
						src="/elevate-main-logo.png"
						width={140}
						height={40}
						alt="profile Image"
					/>
				</Link>
			</div>
		</div>
	);
};

export default DemoTag;
