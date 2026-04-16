// Supabaseクライアントの初期化
const SUPABASE_URL = 'https://qspashlcgfvjatwatspb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_70RU9sJ413lDQSSvD09--w_zOAiYwkz';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchProjects() {
    // 案件テーブル(projects)からデータを取得
    const { data, error } = await supabase.from('projects').select('*');
    
    if (error) {
        console.error('データの取得に失敗しました:', error);
        return;
    }

    const list = document.getElementById('projectList');
    list.innerHTML = ''; // 一旦リストをクリア
    
    // データがあれば表示
    if (data && data.length > 0) {
        data.forEach(project => {
            const li = document.createElement('li');
            li.innerText = project.title;
            list.appendChild(li);
        });
    } else {
        list.innerHTML = '<li>案件がまだありません</li>';
    }
}

// 実行
fetchProjects();
