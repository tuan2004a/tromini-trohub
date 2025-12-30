import { CheckboxCards, Flex, Text } from "@radix-ui/themes";

const PeriodicServiceList = () => {
    return (
		<div className="p-5 rounded-xl bg-white border border-slate-200 shadow-lg">
			<span className="font-semibold text-lg mb-3 block">Dịch vụ sử dụng</span>
			<ul className="space-y-3">
				<li>
					<CheckboxCards.Root defaultValue={["1"]} size="3">
						<CheckboxCards.Item value="1" className="flex justify-between cursor-pointer! box-border">
							<Flex direction="column" width="100%">
								<Text weight="medium" size="4">
									Internet tốc độ cao
								</Text>
								<Text size="2" className="text-slate-400!">
									Cố định hàng tháng
								</Text>
							</Flex>
							<span className="text-nowrap font-medium text-lg!">100,000 đ</span>
						</CheckboxCards.Item>
					</CheckboxCards.Root>
				</li>
				<li>
					<CheckboxCards.Root defaultValue={["1"]} size="3">
						<CheckboxCards.Item value="1" className="flex justify-between cursor-pointer! box-border">
							<Flex direction="column" width="100%">
								<Text weight="medium" size="4">
									Internet tốc độ cao
								</Text>
								<Text size="2" className="text-slate-400!">
									Cố định hàng tháng
								</Text>
							</Flex>
							<span className="text-nowrap font-medium text-lg!">100,000 đ</span>
						</CheckboxCards.Item>
					</CheckboxCards.Root>
				</li>
				<li>
					<CheckboxCards.Root defaultValue={["1"]} size="3">
						<CheckboxCards.Item value="1" className="flex justify-between cursor-pointer! box-border">
							<Flex direction="column" width="100%">
								<Text weight="medium" size="4">
									Internet tốc độ cao
								</Text>
								<Text size="2" className="text-slate-400!">
									Cố định hàng tháng
								</Text>
							</Flex>
							<span className="text-nowrap font-medium text-lg!">100,000 đ</span>
						</CheckboxCards.Item>
					</CheckboxCards.Root>
				</li>
			</ul>
		</div>
	);
}

export default PeriodicServiceList
