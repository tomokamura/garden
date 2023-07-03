export async function get({ request }) {
	const data = [
		"唯一",
		"初心",
		"大成",
		"因果",
		"虚心",
		"丹念",
		"猛進",
		"独走",
		"一挙",
		"解散",
		"鼓舞",
		"雨天",
		"一転",
		"青天",
		"温故",
		"過信",
		"前途",
		"急進",
		"終日",
		"万水",
		"風光",
		"白日",
		"不定",
		"貫徹",
		"不屈",
		"野菜",
		"生活",
		"充足",
		"画一",
		"元来",
		"信念",
		"一束",
		"大禍",
		"一新",
	];

	const selected = data.slice().sort(function(){ return Math.random() - 0.5; }).slice(0, 2);
  return {
    body: JSON.stringify({
      data: selected ? selected : null
    })
  };
}