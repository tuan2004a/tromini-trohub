import { CheckboxCards, Flex, Text } from "@radix-ui/themes";

const ChannelPicker = () => {
    return (
		<div>
			<span className="block text-slate-900 text-sm font-semibold mb-3">Chọn kênh gửi</span>
			<div>
				<CheckboxCards.Root defaultValue={["1"]} size="3">
					<CheckboxCards.Item value="1" className="cursor-pointer! box-border">
						<Flex direction="column" width="100%">
							<Text weight="medium" size="4">
								Internet tốc độ cao
							</Text>
							<Text size="2" className="text-slate-400!">
								Cố định hàng tháng
							</Text>
						</Flex>
					</CheckboxCards.Item>
				</CheckboxCards.Root>
			</div>
		</div>
	);
}

export default ChannelPicker
