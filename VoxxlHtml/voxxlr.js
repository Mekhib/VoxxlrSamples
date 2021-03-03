
window.addEventListener("load", async function(event) 
{
    var viewer = document.querySelector("vx-viewer");
    viewer.on("viewer.load", (args) => 
    {
        viewer.post("navcube", {"visible": true})
        console.log('args', args)
    	// turn on logging to dveloper console
        viewer.post("viewer.update", { logging: true })
        // set orbital camera
        viewer.post("controller", { name: "flyer" })
     
        
        viewer.on("error", (event) =>
        {
            console.log("error");
        })
        viewer.on("viewer.dblclick", event => 
        { 
            console.log('dubClick')
            if (event.distance != Number.POSITIVE_INFINITY)
            {
                viewer.post(["controller.target", "target"], [  event.xyz, { point: event.xyz, normal: event.normal }])
            }
        });
    });
});