const tg = window.Telegram.WebApp;
const startParam = window.Telegram.WebApp.initDataUnsafe.start_param

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        id: tg.initDataUnsafe?.user?.id,
        username: tg.initDataUnsafe?.user?.username,
        startParam
    }
}