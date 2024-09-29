<script lang='ts'>
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { formSchema, type FormSchema } from "$lib/schemas";
    import{
         type SuperValidated,
         type Infer,
         superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import Options from "$lib/components/options.svelte";
 
    export let data;//: SuperValidated<Infer<FormSchema>>;
 
     const form = superForm (data, {
        validators:zodClient(formSchema),
    });
    const { enhance, form: formData } = form
 </script>
 
 <form method="POST" use:enhance>
     <!-- <Form.Field {form} name="username">
         <Form.Control let:attrs>
             <Input {...attrs} bind:value={$formData.username} />
         </Form.Control>
         <Form.Description> This is your public display name.</Form.Description>
         <Form.FieldErrors />
     </Form.Field>
     <Form.Button>Submit</Form.Button> -->
     <Options />
    
 </form>