export class Message {
	constructor(
		public content: string,
		public userId: string,
		public dateTime: string,
		public labels: string,
		public plateId: string,
		public parentMessageId: string) {
	}
}