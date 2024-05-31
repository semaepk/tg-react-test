const tg = window.Telegram.WebApp;

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
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
        first_name: tg.initDataUnsafe?.first_name,
        last_name: tg.initDataUnsafe?.last_name,
        username: tg.initDataUnsafe?.username,
        language_code: tg.initDataUnsafe?.language_code,
        allows_write_to_pm: tg.initDataUnsafe?.allows_write_to_pm,
        auth_date: tg.initDataUnsafe?.auth_date,
        hash: tg.initDataUnsafe?.hash,
    }
}