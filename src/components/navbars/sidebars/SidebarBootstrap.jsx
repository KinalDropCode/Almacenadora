/* eslint-disable react/prop-types */

export const SidebarBootstrap = ({ tasks }) => {
    if (!tasks) {
        return null;
    }

    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"  style={{ width: '250px', height: '94vh' }}>


            <link href="./sidebars.css" rel="stylesheet" />
            <link href="./dist/css/bootstrap.min.css" rel="stylesheet" />
            <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                {/* <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg> */}
                <img src="https://cdn2.iconfinder.com/data/icons/buno-ui-interface/32/__settings_gear_options-64.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                <span class="fs-4">Hi Again</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                    <img src="https://cdn4.iconfinder.com/data/icons/leto-most-searched-mix-8/64/__message_email_send-64.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                        Actions
                    </a>
                </li>
                <li>
                    <a href="task" class="nav-link text-white">
                        <img src="https://cdn4.iconfinder.com/data/icons/buno-info-signs/32/__dashboard_speedometer_gauge-64.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <img src="https://cdn2.iconfinder.com/data/icons/buno-ui-interface/32/__dashboard_grid_layout-256.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                        Create New Task
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <img src="https://cdn4.iconfinder.com/data/icons/buno-info-signs/32/__layer_layers_stack-64.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                        Order by Completed
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <img src="https://cdn1.iconfinder.com/data/icons/buno-ecommerce-shopping-1/32/invoice_list_shopping_shop_todo-64.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                        Order by Earring
                    </a>
                </li>
            </ul>
            <hr />
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://cdn2.iconfinder.com/data/icons/buno-ui-interface/32/__friends_users_people-64.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                    <strong>About us</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="https://github.com/orgs/KinalDropCode/repositories" target="_blank">New Projects...</a></li>
                    <li><a class="dropdown-item" href="https://github.com/orgs/KinalDropCode/people" target="_blank">Our Team</a></li>
                    <li><a class="dropdown-item" href="#">Briefcase</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Contact us</a></li>
                </ul>
            </div>
            <div class="b-example-divider"></div>
            <script src="./dist/js/bootstrap.bundle.min.js"></script>
            <script src="sidebars.js"></script>
        </div>
    );
};
