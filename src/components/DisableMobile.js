export default function DisableMobile() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mobile = () => {
        if (isMobile) {
            alert('sorry mobile only!')
        } else {
            return null
        }
    }
    return (
        <section>
            {mobile}
        </section>
    )
}
