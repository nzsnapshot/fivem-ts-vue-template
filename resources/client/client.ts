setImmediate(() => {
    emitNet('helloserver');
});

onNet('helloclient', message => {
    console.log(`The server replied: ${message}`);
});

RegisterCommand('pog', () => {
	SendNUIMessage({
		event: "NewEvent",
		payload: "yes"
	})
}, false)