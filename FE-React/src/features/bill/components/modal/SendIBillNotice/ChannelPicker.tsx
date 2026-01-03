import { CheckboxCards, Flex, Text } from "@radix-ui/themes";
import { LuBellRing } from "react-icons/lu";
import { MdOutlineMail, MdOutlineSms } from "react-icons/md";

const ChannelPicker = () => {
    return (
		<div>
			<span className="block text-slate-900 font-semibold mb-1.5">Chọn kênh gửi</span>
			<div className="flex gap-x-4">
				<CheckboxCards.Root defaultValue={["1"]} size="2" className="w-37">
					<CheckboxCards.Item value="1" className="cursor-pointer! box-border w-37">
						<Flex direction="column" width="100%">
							<Text weight="medium" size="3" className="flex items-center gap-x-1 text-slate-700!">
								<MdOutlineMail className="text-xl" />
								Email
							</Text>
						</Flex>
					</CheckboxCards.Item>
				</CheckboxCards.Root>
				<CheckboxCards.Root defaultValue={["1"]} size="2" className="w-37">
					<CheckboxCards.Item value="1" className="cursor-pointer! box-border w-37">
						<Flex direction="column" width="100%">
							<Text weight="medium" size="3" className="flex items-center gap-x-1 text-slate-700!">
								<MdOutlineSms className="text-xl" />
								SMS
							</Text>
						</Flex>
					</CheckboxCards.Item>
				</CheckboxCards.Root>
				<CheckboxCards.Root defaultValue={["1"]} size="2" className="w-37">
					<CheckboxCards.Item value="1" className="cursor-pointer! box-border w-37">
						<Flex direction="column" width="100%">
							<Text weight="medium" size="3" className="flex items-center gap-x-1 text-slate-700!">
								<LuBellRing className="text-xl" />
								In-app
							</Text>
						</Flex>
					</CheckboxCards.Item>
				</CheckboxCards.Root>
			</div>
		</div>
	);
}

export default ChannelPicker
