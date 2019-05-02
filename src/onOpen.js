const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('✉️ MailMan')
    .addItem('Show Sidebar', 'showSidebar')
    .addSeparator()
    .addItem('Credits', 'showCredits')
    .addToUi();
};

export default onOpen;
