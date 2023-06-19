window.addEventListener('load', () => {
	const form = document.querySelector("#new-thought-form");
	const input = document.querySelector("#new-thought-input");
	const list_el = document.querySelector("#thoughts");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const thought = input.value;

		const thought_el = document.createElement('div');
		thought_el.classList.add('thought');

		const thought_content_el = document.createElement('div');
		thought_content_el.classList.add('content');

		thought_el.appendChild(thought_content_el);

		const thought_input_el = document.createElement('input');
		thought_input_el.classList.add('text');
		thought_input_el.type = 'text';
		thought_input_el.value = thought;
		thought_input_el.setAttribute('readonly', 'readonly');

		thought_content_el.appendChild(thought_input_el);

		const thought_actions_el = document.createElement('div');
		thought_actions_el.classList.add('actions');
		
		const thought_edit_el = document.createElement('button');
		thought_edit_el.classList.add('edit');
		thought_edit_el.innerText = 'Edit';

		const thought_delete_el = document.createElement('button');
		thought_delete_el.classList.add('delete');
		thought_delete_el.innerText = 'Delete';

		thought_actions_el.appendChild(thought_edit_el);
		thought_actions_el.appendChild(thought_delete_el);

		thought_el.appendChild(thought_actions_el);

		list_el.appendChild(thought_el);

		input.value = '';

		thought_edit_el.addEventListener('click', (e) => {
			if (thought_edit_el.innerText.toLowerCase() == "edit") {
				thought_edit_el.innerText = "Save";
				thought_input_el.removeAttribute("readonly");
				thought_input_el.focus();
			} else {
				thought_edit_el.innerText = "Edit";
				thought_input_el.setAttribute("readonly", "readonly");
			}
		});

		thought_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(thought_el);
		});
	});
});