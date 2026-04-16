const supabase = supabase.createClient('YOUR_SUPABASE_URL', 'YOUR_ANON_KEY');

async function fetchProjects() {
    const { data, error } = await supabase.from('projects').select('*');
    const list = document.getElementById('projectList');
    
    data.forEach(project => {
        const li = document.createElement('li');
        li.innerText = project.title;
        list.appendChild(li);
    });
}

// データの追加例
async function addMember(name, projectId) {
    const { data, error } = await supabase
        .from('members')
        .insert([{ name: name, project_id: projectId }]);
}

fetchProjects();
