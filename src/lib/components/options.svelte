<script lang="ts">
    import * as RadioGroup from "$lib/components/ui/radio-group";
    import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";
</script>

<RadioGroup.Root value="web_dev">
    <p> 1. What do you want to learn?</p>
    <div class=" items-center space-x-2">
        <RadioGroup.Item value="software_engineering" id="r1" />
        <Label for="r1">Software Engineering</Label>
        </div>
    <div class=" items-center space-x-2">
        <RadioGroup.Item value="web_development" id="r2" />
        <Label for="r2">Web Development</Label>
    </div>
    <div class=" items-center space-x-2">
        <RadioGroup.Item value="ai_ml" id="r3" />
        <Label for="r3">Artificial Intelligence/Machine Learning</Label>
    </div>
</RadioGroup.Root>

<br>
<div class="flex w-full max-w-sm flex-col gap-1.5">
    <Label for="list">2. What relevant languages and tools do you know </Label>
    <Input type="list" id="list" placeholder="type here..." />
  </div>

<br>
<RadioGroup.Root value="skill">
    <p> 3. Overall, what skill level are you at in your desired level?</p>
    <div class=" items-center space-x-2">
        <RadioGroup.Item value="beginner" id="r1" />
        <Label for="r1">Beginner</Label>
        </div>
    <div class=" items-center space-x-2">
        <RadioGroup.Item value="intermediate" id="r2" />
        <Label for="r2">Intermediate</Label>
    </div>
    <div class=" items-center space-x-2">
        <RadioGroup.Item value="advanced" id="r3" />
        <Label for="r3">Advanced</Label>
    </div>
</RadioGroup.Root>

<br>
<RadioGroup.Root value="commit">
    <p> 4. How much time per week can you commit to learning this?</p>
    <div class=" items-center space-x-2">
        <RadioGroup.Item value="time1" id="r1" />
        <Label for="r1">1-2 hours</Label>
        </div>
    <div class=" items-center space-x-2">
        <RadioGroup.Item value="time2" id="r2" />
        <Label for="r2">3-5 hours</Label>
    </div>
    <div class=" items-center space-x-2">
        <RadioGroup.Item value="time3" id="r3" />
        <Label for="r3">6-8 hours</Label>
    </div>
</RadioGroup.Root>

