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
        id: tg.initDataUnsafe?.user?.id,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
        first_name: tg.initDataUnsafe?.user?.first_name,
        last_name: tg.initDataUnsafe?.user?.last_name,
        username: tg.initDataUnsafe?.user?.username,
        language_code: tg.initDataUnsafe?.user?.language_code,
        allows_write_to_pm: tg.initDataUnsafe?.user?.allows_write_to_pm,
        photo_url:  tg.initDataUnsafe?.user?.photo_url,
        auth_date: tg.initDataUnsafe?.auth_date,
        is_bot: tg.initDataUnsafe?.user?.is_bot,
        hash: tg.initDataUnsafe?.hash,
        initData: tg.initData
    }
}