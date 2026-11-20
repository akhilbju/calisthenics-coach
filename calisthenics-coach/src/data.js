export const exercises = [
{id:'pushup',name:'Push-up',group:'Push',sets:3,reps:10,unit:'reps',rest:60,desc:'Keep your body straight. Lower your chest under control, then press the floor away.',cues:['Hands just outside shoulder width','Brace abs and glutes','Keep elbows about 30–45° from your body'],easy:'Incline push-up against a sturdy counter'},
{id:'pike',name:'Pike push-up',group:'Shoulders',sets:3,reps:6,unit:'reps',rest:75,desc:'Start in an inverted V. Bend elbows to lower your head gently between your hands.',cues:['Keep hips high','Move slowly','Stop if shoulders hurt'],easy:'Pike hold or shorter range'},
{id:'wall',name:'Wall handstand hold',group:'Skill',sets:3,reps:20,unit:'sec',rest:90,desc:'Use a clear wall and a safe controlled entry. Push tall through shoulders and keep ribs tucked.',cues:['Warm up wrists and shoulders','Keep wall close','Practice a safe exit; no unsupported kick-ups'],easy:'Pike hold with feet on floor'},
{id:'plank',name:'Forearm plank',group:'Core',sets:3,reps:30,unit:'sec',rest:45,desc:'Support yourself on forearms and toes while keeping shoulders, hips and ankles aligned.',cues:['Squeeze glutes','Do not let lower back sag','Breathe normally'],easy:'Knee plank'},
{id:'squat',name:'Bodyweight squat',group:'Legs',sets:3,reps:15,unit:'reps',rest:60,desc:'Sit hips down and back, then stand by pushing through the whole foot.',cues:['Feet around shoulder width','Knees track with toes','Use a comfortable depth'],easy:'Sit-to-stand from a chair'},
{id:'lunge',name:'Reverse lunge',group:'Legs',sets:3,reps:10,unit:'each',rest:60,desc:'Step one foot backwards, lower both knees under control, then return to standing.',cues:['Keep front foot flat','Use a stable stance','Complete reps on both sides'],easy:'Hold a wall for balance'},
{id:'bridge',name:'Glute bridge',group:'Legs',sets:3,reps:15,unit:'reps',rest:45,desc:'Lie on your back, bend knees and lift hips by squeezing glutes.',cues:['Keep ribs down','Do not over-arch your back','Pause at the top'],easy:'Smaller range of motion'},
{id:'hollow',name:'Hollow body hold',group:'Core',sets:3,reps:20,unit:'sec',rest:45,desc:'Brace abs to keep your lower back gently pressed into the floor.',cues:['Start with knees bent','Keep lower back on floor','Extend legs only as far as controlled'],easy:'Tuck hold'},
{id:'deadbug',name:'Dead bug',group:'Core',sets:2,reps:10,unit:'each',rest:45,desc:'On your back, extend opposite arm and leg while keeping your trunk still.',cues:['Move slowly','Avoid arching lower back','Alternate sides'],easy:'Move one limb at a time'},
{id:'snow',name:'Prone reverse snow angel',group:'Pull prep',sets:3,reps:12,unit:'reps',rest:45,desc:'Lie face down and sweep straight arms from overhead towards hips, squeezing upper back.',cues:['Keep neck neutral','Use a small range','Avoid shrugging'],easy:'Bend elbows slightly'},
{id:'ytw',name:'Prone Y-T-W raises',group:'Pull prep',sets:2,reps:8,unit:'each',rest:45,desc:'Face down, lift arms in Y, T and W shapes with small controlled movements.',cues:['No momentum','Keep neck neutral','Do each shape separately'],easy:'One shape at a time'},
{id:'superman',name:'Superman hold',group:'Pull prep',sets:3,reps:15,unit:'sec',rest:45,desc:'Lie face down and gently lift arms and legs a little from the floor.',cues:['Keep movement small','Do not crank your neck','Stop if lower back hurts'],easy:'Lift arms or legs only'},
{id:'bird',name:'Bird dog',group:'Core',sets:2,reps:10,unit:'each',rest:45,desc:'On hands and knees, extend opposite arm and leg while keeping hips level.',cues:['Avoid rotating hips','Pause at full reach','Move slowly'],easy:'Extend one limb only'},
{id:'bear',name:'Bear hold',group:'Core',sets:3,reps:20,unit:'sec',rest:45,desc:'On hands and knees, tuck toes and hover knees just off the floor.',cues:['Keep back flat','Knees hover low','Breathe steadily'],easy:'Keep knees down and brace'},
{id:'reverse',name:'Reverse plank',group:'Core',sets:3,reps:20,unit:'sec',rest:45,desc:'Sit with legs extended and hands behind you, then lift hips and open chest.',cues:['Keep hands comfortable','Lift hips gently','Do not force shoulders'],easy:'Bend knees'}
];
const schedule = {
1:['Push + handstand',['pushup','pike','wall','plank']],
2:['Legs + core',['squat','lunge','bridge','hollow','deadbug']],
3:['Pull preparation',['snow','ytw','superman','reverse','bird']],
4:['Handstand + mobility',['wall','pike','bear','hollow','plank']],
5:['Full-body strength',['pushup','squat','lunge','bridge','plank']],
6:['Active recovery',[]],
0:['Rest day',[]]
};
export function planFor(day) {
 const weekday = day % 7; const [name,ids] = schedule[weekday];
 const week = Math.min(4,Math.floor((day-1)/7)+1);
 const bump = week===1?0:week===2?1:week===3?2:2;
 return {day,week,name,minutes:ids.length?30+(ids.length>4?5:0):0,items:ids.map(id=>{const e=exercises.find(x=>x.id===id);return {...e,reps:e.unit==='sec'?e.reps+(week-1)*5:e.reps+bump};})};
}
