const Delay = (ms: number) => new Promise(res => setTimeout(res, ms));

onNet('helloserver', () => {
	const _source = (global as any).source;

	console.log(`Hello from ${_source}`);

	emitNet('helloclient', _source, 'i got your yes qweqweiqhoweqeage!');
});