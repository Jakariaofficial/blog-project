const searchInput = document.querySelector("input");

searchInput.addEventListener("keyup", function(){

console.log(searchInput.value);

});

//toast message//
//================= Toast Function =================//
/**
 * Show toast message in center with bottom animation and close button
 * @param {string} message - Text to display
 * @param {string} type - "success" (green) or "error" (red)
 */
function showToast(message, type = "success") {
    const toastContainer = document.getElementById('toastContainer');

    if (!toastContainer) {
        console.error("Toast container not found! Add <div id='toastContainer'></div> in HTML.");
        return;
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `
        flex items-center justify-between min-w-[280px] max-w-sm px-4 py-3 rounded-lg text-white shadow-md
        transition-all duration-300 transform opacity-0 translate-y-10 pointer-events-auto
        ${type === "success" ? "bg-green-500" : "bg-red-500"}
    `;

    // Toast content with close button
    toast.innerHTML = `
        <span>${message}</span>
        <button class="ml-4 text-white font-bold hover:text-gray-200">&times;</button>
    `;

    // Append to container
    toastContainer.appendChild(toast);

    // Animate in (slide-up from bottom)
    requestAnimationFrame(() => {
        toast.classList.remove("opacity-0", "translate-y-10");
        toast.classList.add("opacity-100", "translate-y-0");
    });

    // Close button click
    toast.querySelector("button").addEventListener("click", () => {
        hideToast(toast);
    });

    // Auto remove after 3 seconds
    setTimeout(() => hideToast(toast), 3000);
}

// Hide toast function
function hideToast(toast) {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-10");

    // Remove after transition
    setTimeout(() => {
        toast.remove();
    }, 300);
}