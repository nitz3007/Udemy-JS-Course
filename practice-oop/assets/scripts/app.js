class DOMHelper {
    static clearEvenListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destination = document.querySelector(newDestinationSelector);
        destination.append(element);
        element.scrollIntoView({behavior: 'smooth'});
    }
}

class Component {
    constructor(hostElementId, insertBefore=false) {
        if(hostElementId) {
            this.hostElement = document.getElementById(hostElementId);
        } else {
            this.hostElement = document.body;
        }
        this.insertBefore = insertBefore;
    }
    dettach() {
        this.element.remove();
    }
    attach() {
        this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin': 'beforeend',this.element);
    }
}

class Tooltip extends Component {
    constructor(closeNotifierFn, text, hostElementId) {
        super(hostElementId);
        this.closeNotifier = closeNotifierFn;
        this.text = text;
        this.hostElement = document.getElementById(hostElementId);
        this.create();
    }
    closeTooltip() {
        this.dettach();
        this.closeNotifier();
    }

    create() {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card'
        const tooltipTemplate = document.getElementById('tooltip');
        const tooltipBody = document.importNode(tooltipTemplate.content, true);
        tooltipBody.querySelector('p').textContent = this.text;
        tooltipElement.append(tooltipBody);
        
        const hostElementLeft = this.hostElement.offsetLeft;
        const hostElementTop = this.hostElement.offsetTop;
        const hostElementHeight = this.hostElement.offsetHeight;
        const parentElementScrolling = this.hostElement.parentElement.scrollTop;
        const x = hostElementLeft + 20;
        const y = hostElementTop + hostElementHeight - parentElementScrolling - 10;

        tooltipElement.style.position = 'absolute';
        tooltipElement.style.top = y + 'px';
        tooltipElement.style.left = x + 'px';

        tooltipElement.addEventListener('click', this.closeTooltip.bind(this));
        this.element = tooltipElement;
    }
    
}

class ProjectItem {
    hasActiveTooltip = false;
    constructor(id, updateProjectListsFunction, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoBtn();
        this.connectSwitchBtn(type);
    }

    showMoreInfoHandler() {
        if(this.hasActiveTooltip) {
            return;
        }
        const projectElement = document.getElementById(this.id);
        const tooltipText = projectElement.dataset.extraInfo;
        const tooltip = new Tooltip(()=> {
            this.hasActiveTooltip = false;
        }, tooltipText, this.id);
        tooltip.attach();
        this.hasActiveTooltip = true;
    }

    connectMoreInfoBtn() {
        const projectItem = document.getElementById(this.id);
        const moreInfoBtn = projectItem.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
    }

    connectSwitchBtn(type) {
        const projectItem = document.getElementById(this.id);
        let switchBtn = projectItem.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEvenListeners(switchBtn);
        switchBtn.textContent = type === 'active' ? 'Finished' : 'Activate';
        switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
    }

    update(updateProjectListsFn, type) {
        this.updateProjectListsHandler = updateProjectListsFn;
        this.connectSwitchBtn(type);
    }
}

class ProjectList {
    projects=[];
    constructor(type) {
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for(const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));
        }
        console.log(this.projects);
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        console.log(project);
        this.projects.push(project);
        project.update(this.switchProject.bind(this), this.type);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectid);
        // this.projects = this.projects.splice(projectIndex, 1); 
        this.switchHandler(this.projects.find(p => p.id === projectId))
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectsList.setSwitchHandlerFunction(
            finishedProjectsList.addProject.bind(finishedProjectsList)
        );
        finishedProjectsList.setSwitchHandlerFunction(
            activeProjectsList.addProject.bind(activeProjectsList)
        );

        const timerId = setTimeout(this.startAnalytics, 3000);
        document.getElementById('stop-analytics').addEventListener('click', ()=>{
            clearTimeout(timerId);
        });

    }

    static startAnalytics() {
        const scriptEl = document.createElement('script');
        scriptEl.src = 'assets/scripts/analytics.js'
        scriptEl.defer = true;
        document.head.append(scriptEl);
    }
}

App.init();