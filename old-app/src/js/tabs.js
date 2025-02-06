export class Tabs {
  /**
   * @param {HTMLElement} target
   */
  constructor(target) {
    this.target = target;
    this.tabButtons = this.target.querySelectorAll('.tab');

    // Add event tab 'click' event listeners
    [...this.tabButtons].forEach(tab => {
      tab.addEventListener('click', this.handleTabClick.bind({ tab, instance: this }));
    });
  }

  hideAllTabContent() {
    [...this.tabButtons].forEach(tab => {
      const id = `#${tab.dataset.tabContent}`;
      const tabContent = document.querySelector(id);
      tabContent.classList.add('is-hidden');
    });
  }

  /**
   * @param {string} tabId
   */
  showTabContent(tabId) {
    document.querySelector(`#${tabId}`).classList.remove('is-hidden');
  }

  handleTabClick() {
    // Switch tab is-active class
    [...this.instance.tabButtons].forEach(tab => tab.classList.remove('is-active'));
    this.tab.classList.add('is-active');

    // Show/hide respective tab content
    this.instance.hideAllTabContent();
    this.instance.showTabContent(this.tab.dataset.tabContent);
  }
}
